```mermaid
graph TD;
  A[Start] --> B[Login Form]
  B --> C{Are the data valid?}
  C -- No --> B
  C -- Yes --> D[Show success message]
  D --> E[Save to localStorage]
  E --> F[Redirect to dashboard page]
  F --> G[End]
```