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
public class Team implements Serializable {
  private String name;
  private int id;
  private Collection<Appointment> appointmentsById;
  private Collection<Document> documentsById;
  private Collection<Feature> featuresById;
  private Subject subjectBySubjectId;
  private List<Person> persons = new ArrayList<>();

  @Basic
  @Column(name = "name", nullable = true, length = 45)
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  @Id
  @Column(name = "id", nullable = false)
  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  @OneToMany(mappedBy = "teamByTeamId")
  @JsonBackReference(value = "appointmentsById")
  public Collection<Appointment> getAppointmentsById() {
    return appointmentsById;
  }

  public void setAppointmentsById(Collection<Appointment> appointmentsById) {
    this.appointmentsById = appointmentsById;
  }

  @OneToMany(mappedBy = "teamByTeamId")
  public Collection<Document> getDocumentsById() {
    return documentsById;
  }

  public void setDocumentsById(Collection<Document> documentsById) {
    this.documentsById = documentsById;
  }

  @OneToMany(mappedBy = "teamByTeamId")
  public Collection<Feature> getFeaturesById() {
    return featuresById;
  }

  public void setFeaturesById(Collection<Feature> featuresById) {
    this.featuresById = featuresById;
  }

  @ManyToOne
  //@JsonBackReference
  ///@JsonManagedReference(value = "subjectBySubjectId")
  @JoinColumn(name = "Subject_id", referencedColumnName = "id")
  public Subject getSubjectBySubjectId() {
    return subjectBySubjectId;
  }

  public void setSubjectBySubjectId(Subject subjectBySubjectId) {
    this.subjectBySubjectId = subjectBySubjectId;
  }

  @ManyToMany
  //@JsonBackReference
  //@JsonManagedReference(value = "fuck")
  @JoinTable(name = "person_has_team",
    joinColumns = {@JoinColumn(name = "Team_id", referencedColumnName = "id",table = "team")},
    inverseJoinColumns = {@JoinColumn(name = "Person_id", referencedColumnName = "id", table="person")})
  public List<Person> getPersons(){
    return persons;
  }

  public void setPersons(List<Person> persons){this.persons=persons;}

}
