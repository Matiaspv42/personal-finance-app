## Personal finances web application

Comentario: Esta página estaba deployada con Heroku pero debido a los cambios en sus tarifas estoy buscando dónde volver a deployarla 👀

# Chauchera

The idea behind this web application is to allow the user to have and control a centralized **Chauchera** (a wallet) where you can see and record your transactions. Chauchera also allows you to schedule mails in order to never miss a bill (like your telephone bill).

Before going in a tour through the website let me tell you about the technologies we used here. 

###### Front End
    - React 
    - Material UI
    - React Router
###### Back End
    - NodeJS
    - Express
    - PostgreSQL

## Little tour through the webapp

### Landing Page

As a home we have a minimalistic landing page, the idea behind is to motivate the user to register with the **Registrar** button and then log in through the **Iniciar sesión** button. At this point it may be interesting to notice that all the content behind the Log in is protected, thus it is not possible no access it.

![Minimalistic purple landing page](/readme/images/home.png "Landing Page Chauchera")

![Minimalistic registration page](/readme/images/register.png "Register Page Chauchera")

![Login page](/readme/images/login.png "Login Page Chauchera")

### Dashboard

#### Resumen Section

After login, the user is redirected to the dashboard where he can see a summary of his finances. It's worth noting that we are using react-chartjs-2 and we are rendering the graph with information coming from the database. 

![Dashboard page](/readme/images/dashboard-resume.png "Dashboard Chauchera")


#### Chauchera Section

In the chauchera section we can make all the different transactions with our **Chaucheras**, like add money to them, transfer money between them and record different expenses. For the expenses we are using Transactions in out database, this means that if for some reason one of the queries breaks a constraint, the whole transactions will make a rollback. Also, recording an expense will add it to the **Resumen Section** to make it more visibile.

![Chauchera page](/readme/images/dashboard-chauchera.png "Chauchera Section")

#### Recordatorios Section

In this section we can add reminders and choose how we want to get it, at this point the app is just working with email reminders but I'm actively looking for different ways to achieve them. To make the reminders work properly, I'm using the packages **nodemailer** and **node-scheduler**, which are pretty good and with pretty good documentation.

![Reminders page](/readme/images/dashboard-recordatorios.png "Reminders Section")

## Summary

This project was presented as my final project in DesafioLatam, it was a blast to work on it and I'm certain it has real opportunities to be adopted. At this point I'm interested in working on it to become fully usable as a mobile website but also I'm thinking in learn React Native and go with a full on mobile app.

If you are interested in working on this website or helping, hit me up! I have a lot of ideas and we can make something nice!
