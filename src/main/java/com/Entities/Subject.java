package com.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Collection;

/**
 * Created by hicham on 31/05/2017.
 */
@Entity
public class Subject {
  private int id;
  private String title;
  private String content;
  private Collection<Feature> featuresById;
  private Person personByPersonId;
  private Collection<Team> teamByTeamId;

  @Id
  @Column(name = "id", nullable = false)
  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  @Basic
  @Column(name = "title", nullable = true, length = 45)
  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  @Basic
  @Column(name = "content", nullable = true, length = -1)
  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  @OneToMany(mappedBy = "subjectBySubjectId")
  public Collection<Feature> getFeaturesById() {
    return featuresById;
  }

  public void setFeaturesById(Collection<Feature> featuresById) {
    this.featuresById = featuresById;
  }

  @ManyToOne
  @JoinColumn(name = "Person_id", referencedColumnName = "id")
  public Person getPersonByPersonId() {
    return personByPersonId;
  }

  public void setPersonByPersonId(Person personByPersonId) {
    this.personByPersonId = personByPersonId;
  }

  @OneToMany(cascade=CascadeType.ALL,orphanRemoval = true, mappedBy = "subjectBySubjectId")
  //@JsonManagedReference
  @JsonBackReference(value = "subject-teamByTeamId")
  public Collection<Team> getTeamByTeamId() {
    return teamByTeamId;
  }

  public void setTeamByTeamId(Collection<Team> teamsById) {
    this.teamByTeamId = teamsById;
  }
}
