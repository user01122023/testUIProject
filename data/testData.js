// testData.js


const testData = {
  loginTestData: {
    validEmail: 'anastasia@team948739.testinator.com',
    validPassword: '123456',
    invalidEmail: 'john1@example.com',
    invalidPassword: 'password23',
  },
  user1: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    telephone: '0000000000',
    password: 'password123',
    confirmPassword: 'password123',
    securityCode: '1234'
  },
  user2: {
      firstName: [
        // Test cases for "firstName"
        "First1",                 // 0: Alphanumeric characters within limits
        "F",                     // 1: Minimum 1 character
        "F".repeat(32),          // 2: Maximum 32 characters
        "",                      // 3: Empty first name
        "F".repeat(33),          // 4: Exceeds maximum length
        "First tt",                // 5: Disallowed whitespace
        " first",                 // 6: Leading space
        "last "                   // 7: Trailing space
      ],
      lastName: [
        // Test cases for "lastName"
        "Last1",                 // 0: Alphanumeric characters within limits
        "L",                     // 1: Minimum 1 character
        "L".repeat(32),          // 2: Maximum 32 characters
        "",                      // 3: Empty last name
        "L".repeat(33),          // 4: Exceeds maximum length
        "Last tt",                // 5: Disallowed whitespace
        " last",                 // 6: Leading space
        "last "                   // 7: Trailing space
      ],      
      telephone: [
        // Test cases for "telephone"
        "1".repeat(11),          // 0: numeric characters within limits
        "1".repeat(3),           // 1: Minimum 3 characters
        "1".repeat(32),          // 2: Maximum 32 characters
        "",                      // 3: Empty telephone
        "1".repeat(33),          // 4: Exceeds maximum length
        " 1111111",               // 5: leading whitespace
        "111111 ",                // 6: traling whitespace
        "11111 3333",            // 7: Disallowed whitespace
        "sdfff@.f"                 // 8: Invalid input
      ],
      password: [
        // Test cases for "password"
        "12345aaa",              // 0: Alphanumeric and special characters within limits
        "P".repeat(4),           // 1: Minimum 4 characters
        "P".repeat(20),          // 2: maximum length
        "",                      // 3: Empty password
        "p".repeat(21),          // 4: Exceeds maximum length
        "Password tt",                // 5: Disallowed whitespace
        " password",                 // 6: Leading space
        "password "                   // 7: Trailing space
      ],
      confirmPassword: [ 
      // Test cases for "password"
      "12345aaa",              // 0: Alphanumeric and special characters within limits
        "P".repeat(4),           // 1: Minimum 4 characters
        "P".repeat(20),          // 2: maximum length
        "",                      // 3: Empty password
        "p".repeat(21),          // 4: Exceeds maximum length
        "Password tt",                // 5: Disallowed whitespace
        " password",                 // 6: Leading space
        "password "                   // 7: Trailing space
    ],
      securityCode: "5678"             // Arbitrary security code
    },
    user3: {
      email: [
        // Test cases for "email"        
        "testik@team948739.testinator.com",  // 0: new valid email
        "invalid_email",                    // 1: invalid email
        "",                                 // 2: empty email
        "testik@team948739.testinator.com",  // 3: registred email
        " test+lead@team948739.testinator.com", // 4: email with leading space
        "test+trail@team948739.testinator.com ", // 5: email with trailing space
        "test+whitesp@team 948739.testinator.com"  // 6: email with whitespaces
      ], 
    },  
  }
  
;

export default testData;

