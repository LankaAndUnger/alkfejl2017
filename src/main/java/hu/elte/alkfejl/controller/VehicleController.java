package hu.elte.alkfejl.controller;

import hu.elte.alkfejl.annotation.Role;
import hu.elte.alkfejl.entity.User;
import hu.elte.alkfejl.entity.Vehicle;
import hu.elte.alkfejl.repository.VehicleRepository;
import hu.elte.alkfejl.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @Role({User.Role.ADMIN, User.Role.USER})
    @RequestMapping(value = "/r/vehicles", method = RequestMethod.GET)
    public String getVehicles() {
        List<Vehicle> vehicles = vehicleService.getAllVehicles();
        return "get all vehicles";
    }

    @Role(User.Role.ADMIN)
    @RequestMapping(value = "/api/addVehicle", method = RequestMethod.POST)
    public String addNewVehicle(@RequestParam String plate, @RequestParam String brand, @RequestParam String type,
                                @RequestParam String vintage, @RequestParam String price) {
        if (vehicleService.createNewVehicle(plate, brand, type, vintage, price)) {
            return "successfully add a new vehicle to the database";
        }
        else {
            return "bad datas";
        }
    }

    @Role(User.Role.USER)
    @RequestMapping(value = "/api/rating/{vehicleId}", method = RequestMethod.POST)
    public String ratingVehicle(@RequestParam String rating, @PathVariable("vehicleId") Long vehicleId) {
        if (vehicleService.ratingVehicle(vehicleId, rating)) {
            return "successfully rating the vehicle";
        }
        else {
            return "unknow error";
        }
    }

}
