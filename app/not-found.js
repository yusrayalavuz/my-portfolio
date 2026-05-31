import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: 'var(--bg)', color: 'var(--text)',
      fontFamily: 'var(--font-dm-sans)',
    }}>
      <p style={{ fontSize: '.72rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>
        404
      </p>
      <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
        Sayfa bulunamadı.
      </h1>
      <p style={{ color: 'var(--text2)', marginBottom: '2rem' }}>
        Aradığın sayfa mevcut değil ya da taşınmış olabilir.
      </p>
      <Link href="/"
        style={{
          padding: '.72rem 1.65rem', background: 'var(--accent)',
          color: '#fff', borderRadius: 8, textDecoration: 'none',
          fontSize: '.83rem', fontWeight: 500,
        }}
      >
        Ana sayfaya dön →
      </Link>
    </div>
  )
}
