"use client"

const MedspaNowClientPage = () => {
  const templates = [
    { id: "medspa-1", title: "Medspa Template 1" },
    { id: "medspa-2", title: "Medspa Template 2", isComingSoon: true },
    { id: "medspa-3", title: "Medspa Template 3" },
  ]

  return (
    <div>
      <h1>Medspa Now Client Page</h1>
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

export default MedspaNowClientPage
