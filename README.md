<p align="center"><a href="https://papashanes.hostedsitefiles.com" target="_blank"><img src="https://papashanes.hostedsitefiles.com/images/papashanes.png" width="400" alt="Papa Shane's"></a></p>


## Welcome To Papa Shane's
### Better Ingredients. Better Code.

Papa Shane's is a VILT (Vue 3, Inertia, Laravel, TailwindCSS) stack app built with the purpose to demonstrate how one could build out a pizza order tracking site. The site consists of a Dashboard area where the Papa Shane's crew will manage the status of all the orders placed by their loyal customers, and an order tracking page for each order that the hungry and impatient customers can watch to see their order update in real-time.

In addition to the VILT stack, the following technologies are being used for this app:
- [Pusher](https://pusher.com/) for the real time web sockets. .
- Redis for the queue.
- [Laravel Forge](https://forge.laravel.com) for server maintenance and provisioning
- [Github](https://github.com)

## Build the site

 - Clone this repo 
 - Run ```cp .env.local .env```
 - You will need to add your own [Pusher](https://pusher.com/) keys to the `.env` file.
 - Run ```composer install```
 - Run ``php artisan migrate --seed``
 - Run ```npm install && npm run dev``` if you intend to update any of the CSS or Vue files.
 - Run ```php artisan queue:listen``` to start the queue listener.
 - Run ```php artisan serve``` and visit [http://localhost:8000](http://localhost:8000) in your browser.
 - Alternatively, if you are using something like [Laravel Herd](https://herd.laravel.com), you should be able to navigate to [http://papashanes.test](http://papashanes.test)
 - You can login with email: `shane@papashanes.com`, password:`papashanes`.

## Using the Site
<img src="https://papashanes.hostedsitefiles.com/images/dashboard.png" width="400" alt="Papa Shane's Dashboard">

Each grey box is a customer's order, as an employee it is your duty to make each pizza for each order and update the status of each order as you move through the different phases. All new orders are given the "Received" status when the order is first received at Papa Shane's. Each order shows the following information:
 - Order number
 - How old the order is
 - Current status
 - Delivery method (pickup or delivery)
 - Total number of items for the order
 - Each pizza type, size and ingredients selected by the customer

<img src="https://papashanes.hostedsitefiles.com/images/order.png" width="400" alt="Papa Shane's">

When you begin working on a new order, select the "In Progress" status for that order and click the big green "Update" button for that order.

Once, the pizzas are built and the order is in the oven, you can update the status to "In the Oven".

Finally, once all the pizzas are done baking, sliced to perfection and boxed (don't forget the napkins!) you further update the order to "Ready for PICKUP/DELIVERY".

If you want to see what your customer is seeing you can click the red "TRACK" link at the top of each order in the dashboard. This will open the order tracker in a new tab. As you change the statuses for the orders you will be able to see the tracker update in real time.

<img src="https://papashanes.hostedsitefiles.com/images/tracker.png" width="400" alt="Papa Shane's">


### NOTE
The dashboard will only show orders that are not yet ready for pickup or delivery. Additionally, the oldest order will always be first in the list, it is the one "pulsing" to draw more attention to it. If you want to generate more orders to play with the site simply run ```php artisan db:seed --class=OrderSeeder```


