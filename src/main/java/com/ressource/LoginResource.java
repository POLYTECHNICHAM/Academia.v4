package com.ressource;

import com.Entities.Login;
import com.Entities.Person;
import com.ldap.LDAPObject;
import com.service.PersonService;
import com.service.TestLDAP;
import org.jetbrains.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.net.URISyntaxException;

@RestController
public class LoginResource extends HttpServlet {
  @Autowired
  PersonService personService;
  private static final String CHAMP_ID  = "id";
  private static final String CHAMP_LOGIN   = "login";
  private static final String CHAMP_MDP   = "mdp";
  private static final String CHAMP_TYPEPERSON   = "typePerson";
  private static final String CHAMP_SPECIALITY   = "speciality";
  private static final String CHAMP_FIRSTNAME   = "firstName";
  private static final String CHAMP_LASTNAME   = "lastName";



  @PostMapping("/login")
  public Person getCreatePerson(HttpServletRequest request,@RequestBody Login login ) throws URISyntaxException {
    HttpSession session = request.getSession();
    if(login.getLogin()==null){
      return null;
    }else{}
    Person person=new Person();
    LDAPObject information=TestLDAP.IsepApi(login);
    if(login.getLogin().equals("admin")){
      if (!personService.personExistByLogin(login.getLogin())) {
        person.setLogin(login.getLogin());
        person.setDateYear("2017");
        person.setFirstName("admin");
        person.setLastName("admin");
        person.setTypePerson("admin");
        person = personService.createPerson(person);
      } else {
        person = personService.getOnePersonByLogin(login.getLogin());
      }
    }else {
      if (login.getLogin().equals("respo")) {
        if (!personService.personExistByLogin(login.getLogin())) {
          person.setLogin(login.getLogin());
          person.setDateYear("2017");
          person.setFirstName("respo");
          person.setLastName("respo");
          person.setTypePerson("respo");
          person = personService.createPerson(person);
        } else {
          person = personService.getOnePersonByLogin(login.getLogin());
        }
      }
      else{
        if (login.getLogin().equals("client")) {
          if (!personService.personExistByLogin(login.getLogin())) {
            person.setLogin(login.getLogin());
            person.setDateYear("2017");
            person.setFirstName("client");
            person.setLastName("client");
            person.setTypePerson("client");
            person = personService.createPerson(person);
          } else {
            person = personService.getOnePersonByLogin(login.getLogin());
          }
        }
        else{
          if (login.getLogin().equals("eleve")) {
            if (!personService.personExistByLogin(login.getLogin())) {
              person.setLogin(login.getLogin());
              person.setDateYear("2017");
              person.setFirstName("eleve");
              person.setLastName("eleve");
              person.setTypePerson("eleve");
              person = personService.createPerson(person);
            } else {
              person = personService.getOnePersonByLogin(login.getLogin());
            }
          }else {
            if (!personService.personExistByLogin(information.getLogin())) {
              person.setLogin(information.getLogin());
              person.setDateYear("2017");
              person.setFirstName(information.getNom());
              person.setLastName(information.getNomFamille());
              person.setTypePerson(information.getType());
              person = personService.createPerson(person);
            } else {
              person = personService.getOnePersonByLogin(information.getLogin());
            }
          }
        }
      }
    }
    person.setTypePerson(person.getTypePerson().toUpperCase());
    session.setAttribute( person.getLogin(), person );
    return person;
  }


  @GetMapping(value = "/sessionget/{login}")
  public Person getSession(HttpSession session,@PathVariable String login) {
    return (Person) session.getAttribute(login);
  }

  @GetMapping("/endsession")
  public void endSessionHandlingMethod(HttpSession session){
    session.invalidate();
  }


}
