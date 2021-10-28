/**
 *  Pre-requisite - Load all "pending connection request" tiles and make sure they are visible.
 *  If you like this trick, follow me on Twitter @PradeepDevelopr
 */
console.clear();
let thankYouTimer = 1000;

function scrollToTargetAdjusted(buttonID){
    const element = document.getElementById(buttonID);
    // fixed header offset to handle the Linkedin's header
    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function handleClick(btn, index) {
    // trigger Click 1 by 1 on each Accept button
    setTimeout(function () {
        const buttonID = btn.id;
        console.log(buttonID);

        // some fancy CSS
        document.getElementById(buttonID).style.border = "3px solid red";
        // scroll the button into the view
        // document.getElementById(buttonID).scrollIntoView();

        scrollToTargetAdjusted(buttonID);

        console.log(
            `%c Accepted ${index + 1} requests!!`,
            "color:pink; font-size:10px"
        );

        // FINALLY click on the button to accept the connection requests.
        btn.click();
    }, 1000 * index);
}

function acceptAllPendingInvitations() {
    // get all the accept buttons as List
    const acceptButtonsList = document.querySelectorAll(".artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view.invitation-card__action-btn");
    // Fancy message to show in console
    const customMessage = `Total VISIBLE Pending Connection Requests: ${acceptButtonsList.length}`;
    console.log(`%c ${customMessage}`, "color:green; font-size:30px");

    // loop through all the accept buttons
    for (let index = 0; index < acceptButtonsList.length; index++) {
        const btn = acceptButtonsList[index];
        thankYouTimer = thankYouTimer + 1000;
        
        // util function
        handleClick(btn, index);
    }
    
    setTimeout(function () {
      console.log(
        `%c Thank You Everyone !!`,
        "color:blue; font-size:30px"
      );
    }, thankYouTimer);
}

// TRIGGER acceptAllPendingInvitations() FROM THE CONSOLE TO START ACCEPTING THE PENDING CONNECTION REQUESTS.
