'use client'

import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    // 1. Gözlemci (Observer) tanımlanıyor
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis')
          }
        })
      },
      { threshold: 0.1 }
    )

    // 2. Sayfadaki tüm .rev sınıflarını seç
    const elements = document.querySelectorAll('.rev')

    // 3. İlk yükleme anı için kontrol (Sayfa açıldığında görünür olanlar hemen tetiklensin)
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      // Eğer eleman zaten ekranın içindeyse hemen .vis sınıfını ekle
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        el.classList.add('vis')
      }
      // Gözlemlemeye başla
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}