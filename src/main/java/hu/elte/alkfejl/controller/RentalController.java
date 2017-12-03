package hu.elte.alkfejl.controller;

import hu.elte.alkfejl.annotation.Role;
import hu.elte.alkfejl.entity.Rental;
import hu.elte.alkfejl.entity.User;
import hu.elte.alkfejl.entity.Vehicle;
import hu.elte.alkfejl.service.RentalService;
import hu.elte.alkfejl.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RentalController {

    @Autowired
    private RentalService rentalService;

    @Role(User.Role.ADMIN)
    @RequestMapping(value = "/r/rentals", method = RequestMethod.GET)
    public List<Rental> rentals() {
        return rentalService.getAllRentals();
    }

    @Role(User.Role.USER)
    @RequestMapping(value = "getMyRentals", method = RequestMethod.GET)
    public List<Rental> getMyRentals() {
        return rentalService.getCurrentUserRentals();
    }

    @Role(User.Role.USER)
    @RequestMapping(value = "/api/newRental", method = RequestMethod.POST)
    public String createNewRental(@RequestBody Rental rental) {
        return rentalService.createRental(rental);
    }

    @Role(User.Role.ADMIN)
    @RequestMapping(value = "/api/closeRental/{rentalId}", method = RequestMethod.POST)
    public String closeRental(@PathVariable Long rentalId){
        if (rentalService.closeRental(rentalId)) {
            return "";
        }
        else {
            return "Hiba történt a művelet közben!";
        }
    }
}
