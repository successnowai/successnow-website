"use client"

const MortgageNowClientPage = () => {
  const templates = [
    { id: "mortgage-1", title: "Mortgage Template 1" },
    { id: "mortgage-2", title: "Mortgage Template 2", isComingSoon: true },
    { id: "mortgage-3", title: "Mortgage Template 3" },
  ]

  return (
    <div>
      <h1>Mortgage Now Templates</h1>
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

export default MortgageNowClientPage
