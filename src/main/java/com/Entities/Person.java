package com.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Created by hicham on 31/05/2017.
 */
@Entity
//@JsonIdentityInfo(generator=ObjectIdGenerators.UUIDGenerator.class)
public class Person implements Serializable{
  private String dateYear;
  private String login;
  private String typePerson;
  private String speciality;
  private String firstName;
  private String lastName;
  private int id;
  private Collection<Appointment> appointmentsById;
  private Collection<Subject> subjectsById;
  private Collection<Wallcom> wallcomsById;
  private Collection<Wallmessage> wallmessagesById;
  private List<Team> teams = new ArrayList<>();
  @Basic
  @Column(name = "dateYear", nullable = true, length = 45)
  public String getDateYear() {
    return dateYear;
  }

  public void setDateYear(String dateYear) {
    this.dateYear = dateYear;
  }

  @Basic
  @Column(name = "login", nullable = true, length = 45)
  public String getLogin() {
    return login;
  }

  public void setLogin(String login) {
    this.login = login;
  }

  @Basic
  @Column(name = "typePerson", nullable = true, length = 45)
  public String getTypePerson() {
    return typePerson;
  }

  public void setTypePerson(String typePerson) {
    this.typePerson = typePerson;
  }

  @Basic
  @Column(name = "speciality", nullable = true, length = 45)
  public String getSpeciality() {
    return speciality;
  }

  public void setSpeciality(String speciality) {
    this.speciality = speciality;
  }

  @Basic
  @Column(name = "firstName", nullable = true, length = 45)
  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  @Basic
  @Column(name = "lastName", nullable = true, length = 45)
  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  @Id
  @Column(name = "id", nullable = false)
  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  @OneToMany(mappedBy = "personByPersonId")
  public Collection<Appointment> getAppointmentsById() {
    return appointmentsById;
  }

  public void setAppointmentsById(Collection<Appointment> appointmentsById) {
    this.appointmentsById = appointmentsById;
  }

  @OneToMany(mappedBy = "personByPersonId")
  public Collection<Subject> getSubjectsById() {
    return subjectsById;
  }

  public void setSubjectsById(Collection<Subject> subjectsById) {
    this.subjectsById = subjectsById;
  }

  @OneToMany(mappedBy = "personByPersonId")
  public Collection<Wallcom> getWallcomsById() {
    return wallcomsById;
  }

  public void setWallcomsById(Collection<Wallcom> wallcomsById) {
    this.wallcomsById = wallcomsById;
  }

  @OneToMany(mappedBy = "personByPersonId")
  public Collection<Wallmessage> getWallmessagesById() {
    return wallmessagesById;
  }

  public void setWallmessagesById(Collection<Wallmessage> wallmessagesById) {
    this.wallmessagesById = wallmessagesById;
  }

  @ManyToMany
  //@JsonManagedReference
  @JsonBackReference(value = "person_has_team")
  @JoinTable(name = "person_has_team",
    joinColumns = {@JoinColumn(name = "Person_id", referencedColumnName = "id",table = "person")},
    inverseJoinColumns = {@JoinColumn(name = "Team_id", referencedColumnName = "id", table="team")})
  public List<Team> getTeams(){
    return teams;
  }
  public void setTeams(List<Team> teams){
    this.teams=teams;
  }
}
