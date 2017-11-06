package hu.elte.alkfejl.controller;

import hu.elte.alkfejl.annotation.Role;
import hu.elte.alkfejl.entity.User;
import hu.elte.alkfejl.service.SessionService;
import hu.elte.alkfejl.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private SessionService sessionService;

    @Role({User.Role.GUEST, User.Role.ADMIN, User.Role.USER})
    @RequestMapping(value = "/auth/login", method = RequestMethod.POST)
    public String login(@RequestParam String username, @RequestParam String pwd) {
        User currentUser = userService.getUserByUsernameAndPassword(username, pwd);
        if (currentUser != null) {
            sessionService.setCurrentUser(currentUser);
            return "logged in";
        }
        else {
            return "bad credentials";
        }
    }

    @Role(User.Role.GUEST)
    @RequestMapping(value = "/auth/registration", method = RequestMethod.POST)
    public String registration(@RequestParam String username, @RequestParam String pwd,
                               @RequestParam String firstName, @RequestParam String lastName, @RequestParam String address,
                               @RequestParam String phoneNumber, @RequestParam String email, @RequestParam String pwdAgain) {

        if (userService.createUser(username, firstName, lastName, pwd, pwdAgain, email, phoneNumber, address)) {
            return "successfully create a new user";
        }
        else {
            return "bad datas";
        }
    }

}
