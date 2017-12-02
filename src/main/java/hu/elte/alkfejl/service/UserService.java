package hu.elte.alkfejl.service;

import hu.elte.alkfejl.entity.User;
import hu.elte.alkfejl.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SessionService sessionService;

    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public User getUserByUsernameAndPassword(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, password);
    }

    public String createUser(User user) {
        if (user.getUsername().equals("") || user.getFirstName().equals("") || user.getLastName().equals("") || user.getEmail().equals("")
                || user.getAddress().equals("") || user.getPassword().equals("") ||user.getPhoneNumber().equals("")) {
            return "Minden mezőt kötelező kitölteni!";
        }
        else {
            String response = validateRegistrationDatas(user.getUsername(), user.getFirstName(), user.getLastName(), user.getPassword(),
                    user.getEmail(), user.getPhoneNumber(), user.getAddress());

            if (response.equals(" ")) {
                user.setRole(User.Role.USER);
                userRepository.save(user);
                return "";
            }
            else {
                return response;
            }
        }

    }

    public String modifyUser(User user) {
        String respone = validateModifyDatas(user.getEmail(), user.getPhoneNumber());
        if (respone.equals("")) {
            User currentUser = sessionService.getCurrentUser();
            currentUser.setEmail(user.getEmail());
            currentUser.setAddress(user.getAddress());
            currentUser.setPhoneNumber(user.getPhoneNumber());
            return "";
        }
        else {
            return respone;
        }
    }

    private String validateRegistrationDatas(String username, String firstName, String lastName, String pwd,
                                  String email, String phoneNumber, String address) {
        if (userRepository.findByUsername(username) != null) {
            return "Ez a felhasználónév már foglalt! Kérem válasszon egy másikat!";
        }
        if (!firstName.matches("^[a-zA-Z'‘öüóőúéáűŐÜÓÖÚÉÁŰ]{1,}$")) {
            return "Hibás keresztnév!";
        }
        if (!lastName.matches("^[a-zA-Z'‘öüóőúéáűŐÜÓÖÚÉÁŰ]{1,}$")) {
            return "Hibás vezetéknév!";
        }
        if (!email.matches("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")){
            return "Hibás email cím!";
        }
        if (!phoneNumber.matches("^(06)(30|20|70)([0-9]{7,})$")) {
            return "Hibás telefonszám!";
        }
        if (address.equals(" ")){
            return "Hibás cím!";
        }

        return " ";
    }

    private String validateModifyDatas(String email, String phoneNumber) {
        if (!email.matches("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")){
            return "Hibás email cím!";
        }
        if (!phoneNumber.matches("^(06)(30|20|70)([0-9]{7,})$")) {
            return "Hibás telefonszám!";
        }
        return "";
    }
}
