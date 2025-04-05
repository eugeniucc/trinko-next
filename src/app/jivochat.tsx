'use client'

import { useEffect } from 'react'

export const JivoChat = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.src = 'https://script.jivo.ru/?url='
      script.async = true
      document.body.appendChild(script)
    }
  }, [])
  return null
}
