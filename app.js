const milisecInDays = 86400000
const milisecInMonth = 2629800000
const miliSecInYear = 31557600000;


function getbd() {

    let today = new Date();
    console.log("Today", today)

    let birthdaydate = new Date(
        document.getElementById("BD").value
    )
    console.log("Year born in ", birthdaydate)

    let birthdayDateThisYear = birthdaydate; // 20-4-1994
    birthdayDateThisYear.setFullYear(today.getFullYear()); // 20-4-2022

    if (today.getMonth() > birthdayDateThisYear.getMonth()) {
        birthdaydate.setFullYear(birthdayDateThisYear.getFullYear() + 1)
    }

    let nextBirthdayDiffInMIill = birthdayDateThisYear - today
    console.log(nextBirthdayDiffInMIill)

    let birthdayInDays = Math.floor(nextBirthdayDiffInMIill / milisecInDays)
    let remBirthdayInDays = nextBirthdayDiffInMIill % milisecInDays

    let birthdayInHours = Math.floor(remBirthdayInDays / (1000 * 60 * 60))
    let remBirthdayInHours = remBirthdayInDays % (1000 * 60 * 60)

    let birthdayInSec = Math.floor(remBirthdayInHours / (1000 * 60))
    let remBirthdayInSec = remBirthdayInHours % (1000 * 60)

    let birthdayInMilliSec = Math.floor(remBirthdayInSec / 1000)

    console.log(` ${birthdayInDays} days ${birthdayInHours} hours ${birthdayInSec} seconds left in your next birthday`

    )

    document.querySelector("#Yleft").innerHTML = ` ${birthdayInDays} days ${birthdayInHours} hours ${birthdayInSec} seconds left in your next birthday`;

    // birthdayDateThisYear.setSeconds(birthdayDateThisYear.getSeconds() - 1);

    function yearold() {
        let today = new Date()

        let birthdaydate = new Date(
            document.getElementById("BD").value
        )

        let yearOldInMilli = today - birthdaydate

        let ageInYear = Math.floor(yearOldInMilli / miliSecInYear)
        let remAgeInYear = yearOldInMilli % miliSecInYear

        let ageInMonth = Math.floor(remAgeInYear / milisecInMonth)
        let remAgeInMonth = remAgeInYear % milisecInMonth

        let ageInDays = Math.floor(remAgeInMonth / milisecInDays)
        let remAgeInDays = remAgeInMonth % milisecInDays

        let ageInHours = Math.floor(remAgeInDays / (1000 * 60 * 60))
        let remAgeInHours = remAgeInDays % (1000 * 60 * 60)

        let ageInMin = Math.floor(remAgeInHours / (1000 * 60))
        let remAgeInMin = remAgeInHours % (1000 * 60)

        let ageInSec = Math.floor(remAgeInMin / (1000))

        console.log(` You are ${ageInYear} Years ${ageInMonth} Months ${ageInDays} Days ${ageInHours} Hours ${ageInMin} Minutes ${ageInSec} seconds year old `)

        document.querySelector("#Yold").innerHTML = `You are ${ageInYear} Years ${ageInMonth} Months ${ageInDays} Days ${ageInHours} Hours ${ageInMin} Minutes ${ageInSec} seconds year old  `;
    }
    yearold();
}