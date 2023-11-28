function TabChange(TabName)
{
     var Home = document.getElementById('Home');
     var Biography = document.getElementById('Biography');
     var Records = document.getElementById('Records');
     var Cammping = document.getElementById('Cammping');
     var Contact = document.getElementById('Contact');

    switch (TabName)
    {
        case 'Home' :
            {
                Home.classList.add('UnderLine');
                Biography.classList.remove('UnderLine');
                Records.classList.remove('UnderLine');
                Cammping.classList.remove('UnderLine');
                Contact.classList.remove('UnderLine');
                // -----------------------------------
                break;
            }
        case 'Biography' :
            {
                Home.classList.remove('UnderLine');
                Biography.classList.add('UnderLine');
                Records.classList.remove('UnderLine');
                Cammping.classList.remove('UnderLine');
                Contact.classList.remove('UnderLine');
                // -----------------------------------
                break;
            }
        case 'Records' :
            {
                Home.classList.remove('UnderLine');
                Biography.classList.remove('UnderLine');
                Records.classList.add('UnderLine');
                Cammping.classList.remove('UnderLine');
                Contact.classList.remove('UnderLine');
                // -----------------------------------
                break;
            }
        case 'Cammping' :
            {
                Home.classList.remove('UnderLine');
                Biography.classList.remove('UnderLine');
                Records.classList.remove('UnderLine');
                Cammping.classList.add('UnderLine');
                Contact.classList.remove('UnderLine');
                // -----------------------------------
                break;
            }
        case 'Contact' :
            {
                Home.classList.remove('UnderLine');
                Biography.classList.remove('UnderLine');
                Records.classList.remove('UnderLine');
                Cammping.classList.remove('UnderLine');
                Contact.classList.add('UnderLine');
                // -----------------------------------
                break;
            }
    }
}