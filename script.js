const menuData = [
    {
        section: "DRINKS",
        items: [],
        className: "subheader"
    },
    {
        separator: true
    },
    {
        section: "SHAKES",
        items: [
            { name: "Chocolate", price: 50 },
            { name: "Strawberry", price: 50 },
            { name: "Vanilla", price: 50 }
        ],
        image: "MENU1.jpg"
    },
    {
        section: "CAFFEINE BOOST",
        items: [
            { name: "Hot Chocolate", price: 45 },
            { name: "Iced Coffee", price: 45 }
        ],
        image: "MENU3.jpg"
    },
    {
        section: "FRESH SQUEEZE",
        items: [
            { name: "Orange", price: 45 },
            { name: "Water Melon", price: 45 },
            { name: "Apple", price: 40 }
        ],
        image: "MENU2.jpg"
    },
    {
        section: "CM SPECIAL MOCKTAIL",
        items: [
            { name: "Mix Berry Infusion", price: 55 }
        ],
        image: "MENU4.jpg"
    },
    {
        section: "MAINS",
        items: [],
        className: "subheader"
    },
    {
        separator: true
    },
    {
        section: "RICE",
        items: [
            { name: "Nasigoreng", price: 75 },
            { name: "Chicken Rice", price: 65 },
            { name: "Mongolian Rice", price: 80 }
        ],
        image: "MENU5.jpg"
    },
    {
        section: "PASTA",
        items: [
            { name: "Napolitana", price: 70 },
            { name: "Carbonara", price: 70 }
        ],
        image: "MENU6.jpg"
    },
    {
        section: "BURGER & WRAPS",
        items: [
            { name: "Crispy Chicken Burger", price: 65 },
            { name: "Grilled Chicken Wrap", price: 60 }
        ],
        image: "MENU7.jpg"
    },
    {
        section: "CM SPECIAL",
        items: [
            { name: "Cordon Bleu", price: 85, description: "Choose either garlic rice or mash potato" }
        ],
        image: "MENU8.jpg"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const menuContent = document.getElementById("menuContent");

    menuData.forEach(section => {
        if (section.separator) {
            const separator = document.createElement("hr");
            separator.classList.add("thick-separator");
            menuContent.appendChild(separator);
        } else {
            const sectionDiv = document.createElement("div");
            sectionDiv.classList.add("menu-section");

            if (section.image) {
                const sectionImage = document.createElement("img");
                sectionImage.src = section.image;
                sectionDiv.appendChild(sectionImage);
            }

            const sectionContent = document.createElement("div");
            sectionContent.classList.add("menu-section-content");

            const sectionHeader = document.createElement("h2");
            sectionHeader.textContent = section.section;
            if (section.className) {
                sectionHeader.classList.add(section.className);
            }
            sectionContent.appendChild(sectionHeader);

            section.items.forEach(item => {
                const itemDiv = document.createElement("div");
                itemDiv.classList.add("menu-item");

                const itemName = document.createElement("p");
                itemName.textContent = item.name;

                const itemPrice = document.createElement("span");
                itemPrice.textContent = item.price;

                itemDiv.appendChild(itemName);
                itemDiv.appendChild(itemPrice);

                sectionContent.appendChild(itemDiv);

                if (item.description) {
                    const itemDescription = document.createElement("p");
                    itemDescription.classList.add("item-description");
                    itemDescription.textContent = item.description;
                    sectionContent.appendChild(itemDescription);
                }
            });

            sectionDiv.appendChild(sectionContent);
            menuContent.appendChild(sectionDiv);
        }
    });
});
