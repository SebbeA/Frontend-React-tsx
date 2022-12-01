import React from 'react'

interface AlertNotificationType {
    alertType: string
    title: string
    text: string
}

const AlertNotification: React.FC<AlertNotificationType> = ({alertType = "warning", title, text}) => {
  return (
    <div className={`alert alert-${alertType} text-center mb-5`} role="alert">
        <h3>{title}</h3> 
        <p>{text}</p>
    </div>
  )
}

export default AlertNotification