#!/bin/bash

# Create the parent directory if it doesn't exist
#mkdir -p public/images/events

# Array of directory names
directories=(
"2022-12-22-GirlsNotBride-End-Child-Marriages"
"2023-01-09-Women-Caught-in-Financial-Vortex"
"2023-03-08-International-Women-s-Day-Embrace-Equity"
"2023-03-15-International-Women-s-Day-DigitAll-Innovation-and-Technology-in-Gender-Equality"
"2023-03-16-International-Women-s-Day-Reducing-complexity-and-Biases-in-Decision-Making"
"2023-04-17-From-Investment-to-startup-life-Rejina-Rahim-s-quest"
"2023-05-15-2023-World-Women-Economic-and-Business-Summit"
"2023-06-11-The-Futures-Female-Mitigating-Gendered-Financial-Vulnerability"
"2023-07-06-Podcast-Women-Leaning-in-to-be-Financially-Independent"
"2023-08-13-2-Day-Girlpreneur-Boot-Camp-Programme"
"2023-08-24-Financial-Awareness-Your-Money-and-You"
"2023-10-27-Women-s-Law-Conference-Legacy-Building-and-Islamic-Principles"
"2024-01-17-Empowering-Women-Through-Financial-Literacy"
"2024-01-23-Startup-Stories"
"2024-04-14-Rumah-Kita-Donation-Drive"
"2024-04-19-Untying-Knots-Navigating-Divorce-Finance-and-New-Beginnings-Forum"
"2024-05-07-Invest-in-Women-Accelerate-Progress"
"2024-05-16-Rise-Summit-Female-Financial-Empowerment"
"2024-07-13-Ensuring-Stability-Essentials-Strategies-For-Child-Maintenance"
"2024-08-08-Girlfriend-Hour-What-I-Wish-I-Knew-before-I-Get-Married"
"2024-08-21-Girlfriend-Hour-Things-I-Wish-I-Knew-Before-Buying-Property"
"2024-08-21-Creating-Financial-Security-with-Rejina-Rahim-Business-On-The-Rise"
"2024-09-05-Girlfriend-Hour-Renting-vs-Owning-Which-should-I-choose"
"2024-09-19-Girlfriend-Hour-Why-you-should-never-hold-yourself-back"
"2024-09-28-Power-Networking-with-Wahine"
"2024-10-08-Financial-Awareness-Your-First-Step-to-Financial-Confidence-Programme"
"2024-10-10-Girlfriend-Hour-Smart-Investing-101-Where-do-I-start"
"2024-10-15-2024-WEPs-Awards-by-UN"
)

# Create each directory
for dir in "${directories[@]}"; do
    mkdir -p "public/images/events/$dir"
    echo "Created directory: $dir"
done

echo "All directories created successfully!"
