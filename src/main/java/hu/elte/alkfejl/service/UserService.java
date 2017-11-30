package hu.elte.alkfejl.service;

import hu.elte.alkfejl.entity.User;
import hu.elte.alkfejl.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SessionService sessionService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public boolean createUser(String username, String firstName, String lastName, String pwd, String pwdAgain,
                              String email, String phoneNumber, String address) {
        if (validateRegistrationDatas(username, firstName, lastName, pwd, pwdAgain, email, phoneNumber, address)) {
            User user = new User();
            user.setUsername(username);
            user.setFirstName(firstName);
            user.setLastName(lastName);
            user.setEmail(email);
            user.setPhoneNumber(phoneNumber);
            user.setAddress(address);
            user.setPassword(passwordEncoder.encode(pwd));
            user.setRole(User.Role.USER);
            return (userRepository.save(user) != null);
        }
        else {
            return false;
        }
    }

    public boolean modifyUser(String email, String pwd, String address, String phoneNumber) {
        if (validateModifyDatas(email, phoneNumber)) {
            User currentUser = sessionService.getCurrentUser();
            currentUser.setEmail(email);
            currentUser.setPassword(pwd);
            currentUser.setAddress(address);
            currentUser.setPhoneNumber(phoneNumber);
            return (userRepository.save(currentUser) != null);
        }
        else {
            return false;
        }
    }

    private boolean validateRegistrationDatas(String username, String firstName, String lastName, String pwd, String pwdAgain,
                                  String email, String phoneNumber, String address) {
        if (userRepository.findByUsername(username) == null) {
            System.out.println("This username exists already");
            return false;
        }
        if (!firstName.matches("^[a-zA-Z'‘öüóőúéáűŐÜÓÖÚÉÁŰ]{1,}$")) {
            System.out.printf("Invalid firstname");
            return false;
        }
        if (!lastName.matches("^[a-zA-Z'‘öüóőúéáűŐÜÓÖÚÉÁŰ]{1,}$")) {
            System.out.printf("Invalid lastname");
            return false;
        }
        if (!pwd.equals(pwdAgain)) {
            System.out.println("Passwords must match");
            return false;
        }
        if (!email.matches("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")){
            System.out.println("Invalid email");
            return false;
        }
        if (!phoneNumber.matches("^(06)(30|20|70)([0-9]{7,})$")) {
            System.out.println("Invalid phonenumber");
            return false;
        }
        if (address.equals(" ")){
            System.out.println("Invalid address");
            return false;
        }

        return true;
    }

    private boolean validateModifyDatas(String email, String phoneNumber) {
        if (!email.matches("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")){
            System.out.println("Invalid email");
            return false;
        }
        if (!phoneNumber.matches("^(06)(30|20|70)([0-9]{7,})$")) {
            System.out.println("Invalid phonenumber");
            return false;
        }

        return true;
    }
}
