# Ticket counter

## User stories

- As an employee I want to keep a count of all the tickets I have completed so that I can manage my workflow.
- As an employee I want to be able to track the number of tickets my coworkers have completed so that I can compare the number of tickets we complete.

## Special features

- Used routing to add a home page with all the employee names, a ticket counter page with the counters, and an employee profile page.
- A working filter that filters employees based on name and role.
- Open, closed and total tickets shown for each employee using two states that keep track of All tickets and Open tickets.
- Functioning buttons to open a ticket, close a ticket, reopen a ticket, and delete an open ticket.
- The values of the counter are maintained after rerendering the page using useEffect and localStorage.
