import './header.css';

import bat from "../mult"

export default function Header() {
    return (
        
        <nav class="head">

            <div class="logo">
                <a href="#">Logo</a>
            </div>

            <div class="navbar">
                <a href="#">Inicio</a>
                <a href="#">Nosotros</a>
                <a href="#">Contacto</a>
                <a href="#">Productos</a>
            </div>

        </nav>
        
        <header class="content header">

            <h2 class="title">Inicio</h2>

            <p>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                Somos un emprendimiento de ropa muy flama.
            </p>


            <div class="btn-home">

                <a href="#" class="btn">IG </a>
                
                <a href="#" class="btn">TW </a>

            </div>

        </header>
        
        <br>

        <section class="content sau">

            <h2 class="title">Productos</h2>
            <br>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus eligendi quod id sunt? Fuga,
                illum sequi facilis voluptatum odit libero expedita porro
                in corrupti ad architecto necessitatibus ex nemo illo!
            </p>

            <div class="box-container">
                <br>

                <div class="box">

                    <i class="fab fa-angular"></i>
                    <h3>lorem</h3>
                    <br>
                    <p>in corrupti ad architecto </p>

            </div>
                <br>
                <div class="box">

                    <i class="fab fa-apple"></i>
                    <h3>lorem</h3>
                    <br>
                    <p>in corrupti ad architecto </p>
                    <br>

                </div>
                
                <div class="box">

                    <i class="fab fa-android"></i>
                    <h3>lorem</h3>
                    <br>
                    <p>in corrupti ad architecto </p>
                    <br>

                </div>   

            </div>

        </section>

        <section class="content about">

            <h2 class="title">about</h2>
            <br>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Quasi reprehenderit 
                placeat ullam voluptas itaque enim culpa 

            </p>

            <a href="#" class="btn">Saber Mas</a>


        </section>
        <br>

        <section class="content price">

            <article class="contain">

                <h2 class="title">Precio</h2>
                <br>
                <p>El precio depende de que articulo de la pagina te gusta, para saberlo, visita: 
                    <a href="#" class="btn">Articulos</a> 
                </p>
                <br>

            </article>

        </section>
        <section class="content contact">

            <h2 class="title">Contacto</h2>
            <br>
            <p>+54 2612656770</p>
            <br>
            <figure class="Ubi">
                <img src="img/Ubi.PNG" height="220px" width="50%" alt="Ubi">
            </figure>
        </section>
    )
}