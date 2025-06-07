"use client"

const templates = [
  { id: "auto-1", title: "Auto Dealer Template 1" },
  { id: "auto-2", title: "Auto Dealer Template 2", isComingSoon: true },
]

const AutoDealersNowClient = () => {
  return (
    <div>
      <h1>Auto Dealers Now Templates</h1>
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

export default AutoDealersNowClient
