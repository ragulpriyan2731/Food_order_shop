function Category(){
    const fooddata=[{
        id:1,
        restaurentname:"",
        name:"Burger",
        price:120,
        image:"",
        rating:4.0,
        quantity:7,
        description:"Juicy chicken burger with fresh veggies and cheese."
    },{
        id:2,
        restaurentname:"",
        name:"Pizza",
        price:250,
        image:"",
        rating:4.3,
        quantity:6,
        description:"cheesy pizza loaded with toppings and crispy crust"
},{
        id:3,
        restaurentname:"",
        name:"Fried chicken",
        price:200,
        image:"",
        rating:4.2,
        quantity:4,
        description:"crispy fried chicken with spicy flavor"
},{
        id:4,
        restaurentname:"",
        name:"Pasta",
        price:180,
        image:"",
        rating:3.5,
        quantity:8,
        description:"creamy white sauce pasta with herbs and cheese"
},{
        id:5,
        restaurentname:"",
        name:"Sandwich",
        price:90,
        image:"",
        rating:3.8,
        quantity:8,
        description:"Grilled sandwich filled with vegetables and cheese"
},{
        id:6,
        restaurentname:"",
        name:"Biryani",
        price:220,
        image:"",
        rating:4.0,
        quantity:8,
        description:"Traditional spicy chicken with basmati rice"
}]

    
    return(
       <div>
        {fooddata.map((Food)=>(
            <div key={Food.id}>
                <img src={Food.image} alt={Food.name} width="200"/>
                <h2>{Food.name}</h2>
                <p>{Food.description}</p>
                <h3>{Food.price}</h3>



            </div>
        )

        )}


       </div>
    )
}
export default Category