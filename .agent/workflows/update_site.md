---
description: How to save and upload new changes to GitHub
---

Ogni volta che modifichi il codice sul tuo computer e vuoi aggiornare il sito (e GitHub), devi fare questi 3 passaggi nel Terminale:

1.  **Aggiungi le modifiche**:
    Prepara tutti i file modificati per il salvataggio.
    ```bash
    git add .
    ```

2.  **Salva (Committa) le modifiche**:
    Dai un nome a questo aggiornamento (es: "Aggiornato menu").
    ```bash
    git commit -m "Descrivi qui cosa hai cambiato"
    ```

3.  **Carica (Pusha) su GitHub**:
    Invia tutto online.
    ```bash
    git push
    ```

---
**Nota**: Se hai collegato Vercel a GitHub (Opzione 1 della guida precedente), appena fai `git push`, Vercel aggiornerà automaticamente il sito web pubblico dopo un minuto!
