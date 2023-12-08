### Auto input field

**Day 06 - 08.12.2023**

## Description
Create an autocomplete search field, that makes calls to a 3rd party API service. Requirements

- Use html native elements, no UI libraries
- The search should be done when user has typed at least 3 characters
- Should have validation/sanitization to not accept only empty spaces or at the start or end of the value (eg ' iphone' -> 'iphone')
- In some way you should wait for a second after the last typed character and only then run the API call
- In some way you need to cancel/invalidate previous API request if it's still pending/active and a new one is done
