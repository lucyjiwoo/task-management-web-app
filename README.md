# [Web Application Development]: Task Management Tool
## Purpose

1. Reactive front-end design

2. Design of a data-driven backend

3. Session management

4. Asynchronous communication 

5. Web APIs

   

## Goals

The goal of this project is to develop a simplified version of the popular project management tool - [Trello]( https://trello.com/tour ).  Trello is a [Kanban](https://asana.com/resources/what-is-kanban) style application where progress of various project tasks can be easily understood by looking at a visual representation. For example, a project is visualized by a **Board**, different stages of the project are visualized by **Lists**, and **Cards** can be used within a List to represent various tasks. As the project progresses, Cards move from one List to another. For example, a Card for a task that has been completed can be moved from a *'Currently Doing'* List to *'Completed'* List by a team member. Your implementation will be a trimmed down version of a Kanban-style, list-making tool described in the specific requirements below. Before starting the exam, I strongly encourage you to make a free Trello account, and familiarize yourself with the basic functionality of the tool - it will make the specific requirements below a lot easier to follow.



## Specific Requirements

 Your implementation must adhere to the following requirements:   

1.  **A Signup System:** You will develop pages that allow your users to first signup with an email and password and then use the same credentials to login. Only logged in users should be allowed to access the application interface. Users must have an ability to logout as well. Make sure that all stored passwords are encrypted in your database.
2.  **The Interface**: 
    1.  **Sign-in properties:**  upon first sign in, users should be presented with a message to either: (i) open an existing Board, or (ii) create a new Board. If they choose to open an existing Board, you must provide a list of all boards they are a part of, along with a link to access that board. If they choose to create a new Board, you must prompt them for (i) a *project name* and (ii) *a list of member emails* -   the set of other users that are allowed to join the project. 
    2.  **Board Properties:** Each Board is a web page that shows the *project name*, and three default Lists: (1) "To Do"  (2) "Doing" (3) and "Completed". Ensure that only board members can access and view the Board, even if other users are logged in.
    3.  **List Properties**: Each List should display (i) the list's name, and (ii) a set of Cards that below to that list. When the project board is first created there should be no cards on any of the lists. Each list should have a button that allows members of the Board to add new Cards to that list.
    4.  **Card Properties**: Each Card must include a *text entry box* and two buttons: **Edit** and **Delete**. The *text entry box* allows users to describe the details of the Card's task. Users can only edit the content of the *text entry box* after clicking the **Edit** button. While editing, the **Edit** button should be replaced with a **Save** button. While one user is editing a Card, it's position (i.e. the list it's on) and it's content should be locked to prevent other users from making edits to it simultaneously. Once editing is complete, users can save their changes by either (i) pressing the Enter key or (ii) clicking the **Save** button. The **Save** button should then revert back to the **Edit** button. The **Delete** button should permanently remove the Card.
    5.  **Card Movement:** Users should be able to move Cards across the three default lists in a Board by clicking and dragging the cards from one list, to another.
    6.  **Live Changes:** When new Cards are created, existing Lists are edited, or Cards are updated by any user, all other logged-in users should see these changes in real-time without needing to take any explicit action; for example, they should not have to refresh their browser, reload the page, or pressing a refresh button to see the updated content. 

3.  **Board Storage**: You need to store the current state of each Board, (i.e. everything written inside it) in a persistent relational database. Once any user signs up and logins again, they should be presented with the projects they had created or are a part of. The Board page should always show the most up-to-date state. 
4.  **Chat System**: On each Board page, there will be a window option where a group member can chat  with other group members that are currently active and logged into the same Board page. There will be two windows in the chat system: The first window will allow users to type in and submit their chat text, and the second window will display the text. 



**Deploy your web application to Google Cloud**

Deploy your Dockerized App to Google Cloud by running the commands below from the directory.

```bash
gcloud builds submit --tag gcr.io/[gcloud project name]/task-management
gcloud run deploy --image gcr.io/[gcloud project name]/task-management --platform managed
```
