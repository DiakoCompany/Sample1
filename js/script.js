function load()
{
    TabChange('Home');
}
function TabChange(TabName)
{
     var Home_Tab = document.getElementById('Home-Tab');
     var Biography_Tab = document.getElementById('Biography-Tab');
     var Records_Tab = document.getElementById('Records-Tab');
     var Cammping_Tab = document.getElementById('Cammping-Tab');
     var Contact_Tab = document.getElementById('Contact-Tab');
    //  ------------------------------------------------------
    var Home = document.getElementById('Home');
    var Biography = document.getElementById('Biography');
    var Records = document.getElementById('Records');
    var Cammping = document.getElementById('Cammping');
    var Contact = document.getElementById('Contact');

    switch (TabName)
    {
        case 'Home' :
            {
                Home_Tab.classList.add('UnderLine');
                Biography_Tab.classList.remove('UnderLine');
                Records_Tab.classList.remove('UnderLine');
                Cammping_Tab.classList.remove('UnderLine');
                Contact_Tab.classList.remove('UnderLine');
                // -----------------------------------
                Home.style.display = "flex";
                Biography.style.display = "none";
                Records.style.display = "none";
                Cammping.style.display = "none";
                Contact.style.display = "none";
                break;
            }
        case 'Biography' :
            {
                Home_Tab.classList.remove('UnderLine');
                Biography_Tab.classList.add('UnderLine');
                Records_Tab.classList.remove('UnderLine');
                Cammping_Tab.classList.remove('UnderLine');
                Contact_Tab.classList.remove('UnderLine');
                // -----------------------------------
                Home.style.display = "none";
                Biography.style.display = "flex";
                Records.style.display = "none";
                Cammping.style.display = "none";
                Contact.style.display = "none";
                break;
            }
        case 'Records' :
            {
                Home_Tab.classList.remove('UnderLine');
                Biography_Tab.classList.remove('UnderLine');
                Records_Tab.classList.add('UnderLine');
                Cammping_Tab.classList.remove('UnderLine');
                Contact_Tab.classList.remove('UnderLine');
                // -----------------------------------
                Home.style.display = "none";
                Biography.style.display = "none";
                Records.style.display = "flex";
                Cammping.style.display = "none";
                Contact.style.display = "none";
                break;
            }
        case 'Cammping' :
            {
                Home_Tab.classList.remove('UnderLine');
                Biography_Tab.classList.remove('UnderLine');
                Records_Tab.classList.remove('UnderLine');
                Cammping_Tab.classList.add('UnderLine');
                Contact_Tab.classList.remove('UnderLine');
                // -----------------------------------
                Home.style.display = "none";
                Biography.style.display = "none";
                Records.style.display = "none";
                Cammping.style.display = "flex";
                Contact.style.display = "none";
                break;
            }
        case 'Contact' :
            {
                Home_Tab.classList.remove('UnderLine');
                Biography_Tab.classList.remove('UnderLine');
                Records_Tab.classList.remove('UnderLine');
                Cammping_Tab.classList.remove('UnderLine');
                Contact_Tab.classList.add('UnderLine');
                // -----------------------------------
                Home.style.display = "none";
                Biography.style.display = "none";
                Records.style.display = "none";
                Cammping.style.display = "none";
                Contact.style.display = "flex";
                break;
            }
    }
}