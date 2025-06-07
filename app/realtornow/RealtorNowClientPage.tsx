"use client"

const RealtorNowClientPage = () => {
  const templates = [
    { id: "realtor-template-1", title: "Realtor Template 1" },
    { id: "realtor-template-2", title: "Realtor Template 2" },
    { id: "realtor-template-3", title: "Realtor Template 3" },
  ]

  return (
    <div>
      <h1>Realtor Now Client Page</h1>
      <p>Select a template:</p>
      <ul>
        {templates.map((template) => (
          <li key={template.id}>
            {template.title} (ID: {template.id})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RealtorNowClientPage
