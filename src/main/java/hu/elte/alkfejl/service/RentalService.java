package hu.elte.alkfejl.service;

import hu.elte.alkfejl.entity.Rental;
import hu.elte.alkfejl.entity.User;
import hu.elte.alkfejl.entity.Vehicle;
import hu.elte.alkfejl.repository.RentalRepository;
import hu.elte.alkfejl.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
@Transactional
public class RentalService {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private SessionService sessionService;

    @Autowired
    private RentalRepository rentalRepository;

    public String createRental(Rental rental) {
        LocalDate start = createLocalDateFromString(rental.getRentalStart().toString());
        LocalDate end = createLocalDateFromString(rental.getRentalEnd().toString());

        if(validateIntervall(start, end)) {
            Vehicle vehicle = vehicleRepository.findOne(rental.getVehicle().getId());
            Rental newRental = new Rental(sessionService.getCurrentUser(), vehicle, start, end);
            rentalRepository.save(newRental);
            return "";
        }
        else {
            return "A kölcsönzés vége előbb van, mint a kölcsönzés kezdete!";
        }
    }

    private LocalDate createLocalDateFromString(String date) {
        String[] dateParts = date.split("/");
        return LocalDate.of(Integer.valueOf(dateParts[2]), Integer.valueOf(dateParts[1]), Integer.valueOf(dateParts[0]));
    }

    private boolean validateIntervall(LocalDate start, LocalDate end) {
        return start.isBefore(end);
    }

    public List<Rental> getRentalsByUser(User currentUser) {
        return rentalRepository.findAllByUser(currentUser);
    }

    public List<Rental> getAllRentals() {
        return rentalRepository.findAll();
    }

    public boolean closeRental(Long rentalId) {
        Rental rental = rentalRepository.findOne(rentalId);
        rental.setRentalClose(LocalDate.now());
        int price = calculatePrice(rental);
        rental.setAmount(price);
        return (rentalRepository.save(rental) != null);
    }

    private int calculatePrice(Rental rental) {
        int days = (int) ChronoUnit.DAYS.between(rental.getRentalStart(), rental.getRentalEnd());
        if (rental.getRentalEnd().isBefore(LocalDate.now())) {
            return (int)((days * rental.getVehicle().getPrice()) * 0.2);
        }
        else {
            return days * rental.getVehicle().getPrice();
        }
    }

    @Transactional
    public List<Rental> getCurrentUserRentals() {
       return rentalRepository.findAllByUser(sessionService.getCurrentUser());
    }
}
