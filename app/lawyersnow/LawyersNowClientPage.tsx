"use client"

const LawyersNowClientPage = () => {
  const templates = [
    { id: "lawyer-1", title: "Lawyer Template 1" },
    { id: "lawyer-2", title: "Lawyer Template 2", isComingSoon: true },
  ]

  return (
    <div>
      <h1>Lawyers Now Client Page</h1>
      <ul>
        {templates.map((template) => (
          <li key={template.id}>
            {template.title} {template.isComingSoon ? "(Coming Soon)" : ""}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LawyersNowClientPage
