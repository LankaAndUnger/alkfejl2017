package hu.elte.alkfejl.controller;

import hu.elte.alkfejl.annotation.Role;
import hu.elte.alkfejl.entity.Rating;
import hu.elte.alkfejl.entity.User;
import hu.elte.alkfejl.service.RentalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RatingController {

    @Autowired
    private RentalService rentalService;

    @Role(User.Role.USER)
    @RequestMapping(value = "/r/ratings", method = RequestMethod.GET)
    public List<Rating> getAllRatings() {
        return rentalService.getAllRatings();
    }
}
