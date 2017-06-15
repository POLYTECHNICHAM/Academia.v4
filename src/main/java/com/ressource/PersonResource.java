package com.ressource;

import com.Entities.Person;
import com.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

@RestController
@SessionAttributes("person")
public class PersonResource {
  @Autowired
  private PersonService personService;

  @GetMapping("/persons")
  public List<Person> getAllPersons() {
    return personService.getAllPersons();
  }

  @GetMapping("/person/eleve")
  public List<Person> getEleves (){
    return  personService.getEleves();
  }
  @GetMapping("/persons/{id}")
  public Person getAllPersons(@PathVariable Integer id) {
    return personService.getOnePerson(id);
  }

  @GetMapping("/person/client")
  public List<Person> getClients (){
    return  personService.getClients();
  }

  @GetMapping("/client")
  public Person getClient(@RequestParam(value = "clientFirstName") String clientName)throws URISyntaxException{
    return personService.getClient(clientName);
  }

  @PostMapping("/persons")
  public Person createPerson(@RequestBody Person person) throws URISyntaxException {
    return personService.createPerson(person);
  }

  @PutMapping("/updatePerson")
  public Person updateOnePerson(@RequestBody Person person) throws URISyntaxException {
    return personService.updateOnePerson(person);
  }

  @PutMapping("/persons")
  public void updatePersons(@RequestBody ArrayList<Person> personList) throws URISyntaxException {
    personService.updatePersons(personList);
  }

  @DeleteMapping("/persons/{id}")
  public void deletePerson(@PathVariable Integer id) throws URISyntaxException {
    personService.deletePerson(id);
  }

}
