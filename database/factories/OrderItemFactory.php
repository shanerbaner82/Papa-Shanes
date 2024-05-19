<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrderItem>
 */
class OrderItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Arbitrary list of pizza toppings
        $options = [
            'Pepperoni',
            'Sausage',
            'Onions',
            'Tomatoes',
            'Pineapple',
            'Chicken',
            'Peppers',
            'Olives',
            'Spinach',
            'Basil',
        ];

        $numberOfIngredients = fake()->numberBetween(1, 4); // Select a random number of toppings for the pizza

        $toppings = [];

        for ($i = 1; $i <= $numberOfIngredients; $i++) {
            $toppings[] = Arr::random($options); // Add random ingredients to the pizza
        }

        $toppings = collect($toppings)->unique()->values(); // Ensure there are no duplicates

        return [
            'product' => fake()->randomElement([
                'Deep Dish',
                'Thin Crust',
                'Personal Pan',
            ]),
            'product_options' => [
                'size' => fake()->randomElement(['S', 'M', 'L', 'XL']),
                'toppings' => $toppings,
            ],
        ];
    }
}
