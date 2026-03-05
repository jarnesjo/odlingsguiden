import { useState } from 'react'
import styles from './FeedbackWidget.module.css'

interface FeedbackWidgetProps {
  page: string
}

export function FeedbackWidget({ page }: FeedbackWidgetProps) {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!message.trim()) return

    setStatus('sending')
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page, message: message.trim() }),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className={styles.wrapper}>
        <p className={styles.thanks}>Tack! Vi kollar på det.</p>
      </div>
    )
  }

  if (!open) {
    return (
      <div className={styles.wrapper}>
        <button className={styles.trigger} onClick={() => setOpen(true)}>
          Hittade du ett fel? Berätta!
        </button>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label} htmlFor="feedback-message">
          Beskriv vad som verkar fel
        </label>
        <textarea
          id="feedback-message"
          className={styles.textarea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="T.ex. &quot;Sortnamnet Bolero stämmer inte för morot&quot; eller &quot;Stavfel i beskrivningen&quot;"
          rows={3}
          autoFocus
        />
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.cancel}
            onClick={() => { setOpen(false); setMessage(''); setStatus('idle') }}
          >
            Avbryt
          </button>
          <button
            type="submit"
            className={styles.submit}
            disabled={!message.trim() || status === 'sending'}
          >
            {status === 'sending' ? 'Skickar...' : 'Skicka'}
          </button>
        </div>
        {status === 'error' && (
          <p className={styles.error}>Kunde inte skicka. Försök igen senare.</p>
        )}
      </form>
    </div>
  )
}
