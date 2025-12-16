# Come Generare un Token per GitHub

GitHub non accetta più la password del tuo account per caricare codice da terminale. Devi usare un "Personal Access Token".

Ecco come crearlo in 2 minuti:

1.  Vai su GitHub.com e clicca sulla tua foto profilo (in alto a destra) -> **Settings**.
2.  Nella colonna di sinistra, scorri in fondo e clicca su **Developer settings**.
3.  Clicca su **Personal access tokens** -> **Tokens (classic)**.
4.  Clicca su **Generate new token** -> **Generate new token (classic)**.
5.  Dajli un nome (es: "MacBook").
6.  **Scadenza (Expiration)**: Metti "No expiration" se non vuoi rifarlo ogni mese.
7.  **Select scopes** (Importante!): Spunta la casella **repo** (questo basta per caricare codice).
8.  Scorri in fondo e clicca **Generate token**.

**COPIA IL CODICE CHE TI APPARE!** (Inizia con `ghp_...`)
Non potrai più vederlo dopo.

---

### Come usarlo
1. Torna nel Terminale del Mac.
2. Rilancia il comando:
   ```bash
   git push -u origin main
   ```
3. Quando chiede `Password for 'https://...@github.com':` -> **Incolla il token** che hai appena copiato (invece della tua password).
   *(Nota: Mentre incolli, non vedrai apparire pallini o caratteri, è normale. Incolla e premi Invio).*
