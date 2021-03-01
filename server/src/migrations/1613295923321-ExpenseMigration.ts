import { MigrationInterface, QueryRunner } from "typeorm";

export class ExpenseMigration1613295923321 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into expenses (category, product, price, "userId") values ('Finance', 'Wine - Vineland Estate Semi - Dry', 28.23, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Finance', 'Pear - Halves', 84, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Energy', 'V8 - Tropical Blend', 21, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Consumer Services', 'Tea - Camomele', 5, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Transportation', 'Wine - Vineland Estate Semi - Dry', 87, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Consumer Services', 'Wine - Red, Colio Cabernet', 98, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Health Care', 'Potatoes - Instant, Mashed', 56, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Technology', 'Coffee Cup 16oz Foam', 20, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Technology', 'Bagel - Everything Presliced', 26, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Consumer Services', 'Tuna - Sushi Grade', 78, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Energy', 'Syrup - Golden, Lyles', 78, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'Catfish - Fillets', 71, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Technology', 'Magnotta Bel Paese Red', 30, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Consumer Services', 'Prunes - Pitted', 2, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Capital Goods', 'Lamb - Shoulder, Boneless', 51, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'Mustard - Individual Pkg', 98, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'Cake - Bande Of Fruit', 26, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Health Care', 'Smoked Tongue', 93, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Finance', 'Sprouts Dikon', 33, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Health Care', 'Frangelico', 77, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Capital Goods', 'Napkin White - Starched', 94, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'Potatoes - Purple, Organic', 7, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'The Pop Shoppe - Black Cherry', 56, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Technology', 'Bread Ww Cluster', 77, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Miscellaneous', 'Mace', 79, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Miscellaneous', 'Wine - Touraine Azay - Le - Rideau', 65, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Public Utilities', 'Oil - Sunflower', 52, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'Wine - Niagara,vqa Reisling', 38, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Consumer Services', 'Cleaner - Bleach', 82, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Health Care', 'Carrots - Mini Red Organic', 19, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Consumer Durables', 'Squash - Guords', 91, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Transportation', 'Guava', 71, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'Greens Mustard', 38, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'Seabream Whole Farmed', 90, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Finance', 'Syrup - Monin - Granny Smith', 36, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Finance', 'Banana - Leaves', 83, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Capital Goods', 'Cardamon Ground', 89, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Technology', 'Crab - Meat Combo', 50, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'Lambcasing', 44, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Capital Goods', 'Sprouts - Peppercress', 24, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Health Care', 'Silicone Parch. 16.3x24.3', 86, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Consumer Non-Durables', 'Cheese - Mozzarella', 41, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'Tomatoes - Vine Ripe, Yellow', 32, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Health Care', 'Fudge - Chocolate Fudge', 44, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Public Utilities', 'Browning Caramel Glace', 74, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Health Care', 'Wine - Red, Pinot Noir, Chateau', 36, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Technology', 'Basil - Fresh', 7, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Finance', 'Spaghetti Squash', 35, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Health Care', 'Vinegar - White Wine', 22, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'Juice - Clamato, 341 Ml', 29, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'Chips Potato Swt Chilli Sour', 56, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'Coconut - Creamed, Pure', 41, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'Tart Shells - Savory, 2', 89, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Health Care', 'Crab - Soft Shell', 21, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'Potatoes - Pei 10 Oz', 86, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Consumer Services', 'Beef Dry Aged Tenderloin Aaa', 26, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Public Utilities', 'Soup - Campbells Beef Stew', 96, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Consumer Services', 'Cheese - Augre Des Champs', 28, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Technology', 'Turkey - Ground. Lean', 53, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Technology', 'Nantucket - Orange Mango Cktl', 79, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Consumer Services', 'Lettuce - Boston Bib - Organic', 8, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Energy', 'Ecolab - Lime - A - Way 4/4 L', 55, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'Sausage - Meat', 9, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Consumer Non-Durables', 'Bread - White Mini Epi', 84, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'Creme De Cacao White', 37, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Technology', 'Yeast - Fresh, Fleischman', 96, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'Muffin Hinge - 211n', 56, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Consumer Services', 'Wine - Red, Cabernet Merlot', 59, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Finance', 'Mix - Cappucino Cocktail', 41, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Basic Industries', 'Melon - Watermelon Yellow', 3, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Public Utilities', 'Soup - Boston Clam Chowder', 47, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Basic Industries', 'Bread - Bistro Sour', 3, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Consumer Services', 'Turkey - Ground. Lean', 22, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Health Care', 'Nut - Chestnuts, Whole', 3, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Consumer Services', 'Soup - Campbells, Classic Chix', 30, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Energy', 'Pepper - Cubanelle', 40, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Consumer Services', 'Mustard - Pommery', 11, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Technology', 'Shrimp - Baby, Warm Water', 12, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'Muffin Carrot - Individual', 89, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Consumer Services', 'Syrup - Kahlua Chocolate', 38, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Public Utilities', 'Wine - Kwv Chenin Blanc South', 88, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Health Care', 'Pork - Sausage, Medium', 10, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Technology', 'Pie Box - Cello Window 2.5', 100, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Finance', 'Quinoa', 99, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Consumer Services', 'Chicken Giblets', 78, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Health Care', 'Muffins - Assorted', 99, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Health Care', 'Veal - Eye Of Round', 59, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Energy', 'Garlic - Peeled', 96, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Finance', 'Wine - White, Ej', 75, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'Onions Granulated', 71, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Basic Industries', 'Lamb - Leg, Bone In', 92, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Health Care', 'Rhubarb', 32, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Health Care', 'Foam Tray S2', 3, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Capital Goods', 'Beer - Camerons Auburn', 33, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Finance', 'Rolled Oats', 23, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Consumer Services', 'Sauce - Sesame Thai Dressing', 29, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Health Care', 'Steamers White', 27, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('Consumer Services', 'Lamb - Racks, Frenched', 4, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'Ham - Cooked', 11, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
            insert into expenses (category, product, price, "userId") values ('n/a', 'Sobe - Lizard Fuel', 16, 'f6356716-cd6d-44bf-a477-61a2b6adfb12');
        `)
    }

    public async down(_: QueryRunner): Promise<void> {
    }

}
