const employees = [
  {
    id: 1,
    firstname: "Arjun",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Logo",
        description: "Create a logo for the client project.",
        date: "2025-01-05",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Bug #45",
        description: "Resolve the login issue reported by QA.",
        date: "2025-01-06",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Prepare Presentation",
        description: "Draft a presentation for the upcoming meeting.",
        date: "2025-01-07",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstname: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Database Cleanup",
        description: "Remove outdated records from the database.",
        date: "2025-01-05",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Code Review",
        description: "Review the code for the new feature implementation.",
        date: "2025-01-06",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Team Meeting",
        description: "Discuss project milestones with the team.",
        date: "2025-01-07",
        category: "Management",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 3,
    firstname: "Rohan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "UI Testing",
        description: "Test the new UI components for responsiveness.",
        date: "2025-01-05",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client Call",
        description: "Join a call with the client to gather requirements.",
        date: "2025-01-06",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Bug Fix #23",
        description: "Resolve UI alignment issues.",
        date: "2025-01-07",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
  },
  {
    id: 4,
    firstname: "Meera",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Deploy to Production",
        description: "Deploy the latest build to the production server.",
        date: "2025-01-05",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Write Documentation",
        description: "Document the new feature for internal use.",
        date: "2025-01-06",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Setup CI/CD Pipeline",
        description: "Configure the continuous integration and delivery pipeline.",
        date: "2025-01-07",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    firstname: "Kavya",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Market Research",
        description: "Research competitor strategies for product marketing.",
        date: "2025-01-05",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update Website Content",
        description: "Revise content on the company's website.",
        date: "2025-01-06",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Social Media Campaign",
        description: "Plan and execute a new social media campaign.",
        date: "2025-01-07",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
  },
]

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123",
  },
]

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))

  return { employees, admin }
}

export const addTask = (employeeId, newTask) => {
  const { employees } = getLocalStorage()
  const updatedEmployees = employees.map((employee) => {
    if (employee.id === employeeId) {
      return {
        ...employee,
        tasks: [...employee.tasks, newTask],
        taskNumbers: {
          ...employee.taskNumbers,
          active: employee.taskNumbers.active + 1,
          newTask: employee.taskNumbers.newTask + 1,
        },
      }
    }
    return employee
  })

  // Update localStorage
  localStorage.setItem("employees", JSON.stringify(updatedEmployees))
}
