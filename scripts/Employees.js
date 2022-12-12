import { getEmployees } from "./database.js"
import { Orders } from "./Orders.js"

const employees = getEmployees()
const orders = Orders()

const employeeOrders = (employee) => {
    let fullfilledOrders = 0
    for (const order of Orders) 
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (product.id === parseInt(employeeId)) {
                    window.alert(` ${employee.name} sold ${product.price} `)
                }
            }
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.Id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

