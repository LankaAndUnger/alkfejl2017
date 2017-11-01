package hu.elte.alkfejl.controller;

import hu.elte.alkfejl.annotation.Role;
import hu.elte.alkfejl.entity.Rental;
import hu.elte.alkfejl.entity.User;
import hu.elte.alkfejl.service.RentalService;
import hu.elte.alkfejl.service.SessionService;
import hu.elte.alkfejl.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProfileController {

    @Autowired
    private SessionService sessionService;

    @Autowired
    private RentalService rentalService;

    @Autowired
    private UserService userService;

    @Role({User.Role.ADMIN, User.Role.USER})
    @RequestMapping(value = "/r/profile", method = RequestMethod.GET)
    public void profile(Model model) {
        User currentUser = sessionService.getCurrentUser();
        List<Rental> myRentals = rentalService.getRentalsByUser(currentUser);
        model.addAttribute("currentUser", currentUser);
        model.addAttribute("rentals", myRentals);
    }

    @Role({User.Role.ADMIN, User.Role.USER})
    @RequestMapping(value = "/api/modifyUser", method = RequestMethod.POST)
    public String modifyUser(@RequestParam String email, @RequestParam String pwd,
                             @RequestParam String address, @RequestParam String phoneNumber) {
        if (userService.modifyUser(email, pwd, address, phoneNumber)) {
            return "successfully modify user";
        }
        else {
            return "bad datas";
        }
    }

}
