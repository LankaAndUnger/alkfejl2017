package hu.elte.alkfejl.service;

import hu.elte.alkfejl.entity.User;
import lombok.Data;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

@Service
@SessionScope
@Data
public class SessionService {

    private User currentUser;

    public User getCurrentUser() {
        return currentUser;
    }

    public Long getCurrentUserId() {
        return currentUser.getId();
    }

    public void setCurrentUser(User currentUser) {
        this.currentUser = currentUser;
    }
}
