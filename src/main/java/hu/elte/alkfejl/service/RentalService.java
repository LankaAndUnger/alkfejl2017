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

    public boolean createRental(Long vehicleId, String rentalStart, String rentalEnd) {
        LocalDate start = createLocalDateFromString(rentalStart);
        LocalDate end = createLocalDateFromString(rentalEnd);

        if(validateIntervall(start, end)) {
            Vehicle vehicle = vehicleRepository.findOne(vehicleId);
            Rental rental = new Rental(sessionService.getCurrentUser(), vehicle, start, end);
            return (rentalRepository.save(rental) != null);
        }
        else {
            return false;
        }
    }

    private LocalDate createLocalDateFromString(String date) {
        String[] dateParts = date.split("/");
        return LocalDate.of(Integer.valueOf(dateParts[0]), Integer.valueOf(dateParts[1]), Integer.valueOf(dateParts[2]));
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
}
