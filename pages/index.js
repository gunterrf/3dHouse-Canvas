
import dynamic from 'next/dynamic'

const SceneCanvas = dynamic(() => import('../components/SceneCanvas'), { ssr: false })

export default function Home() {
  return (
    <main style={{ height: '100vh', background: '#fff' }}>
      <SceneCanvas />
    </main>
  )
}
