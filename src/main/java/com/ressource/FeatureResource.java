package com.ressource;


import com.Entities.Feature;
import com.service.FeatureService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;

//import org.springframework.security.access.annotation.Secured;

@RestController
@RequestMapping("/java")
public class FeatureResource {
    private FeatureService featureService;

    /**
     * POST  /feature  : Creates a new feature.
     * <p>
     * Creates a new feature
     * </p>
     *
     * @param feature the feature to create
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/features")
    //@Secured(AuthoritiesConstants.ADMIN) /*Qui on veut*/
    public Feature createFeature(@PathVariable Feature feature) throws URISyntaxException {

        return featureService.createFeature(feature);

    }

    /**
     * PUT  /feature  : Update a feature.
     * <p>
     * Updates a feature
     * </p>
     *
     * @param feature the feature to update
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/features")
    //@Secured(AuthoritiesConstants.ADMIN) /*Qui on veut*/
    public ResponseEntity<Feature> updateFeature(@PathVariable Feature feature) throws URISyntaxException {
        Feature featureUpdate;
        featureUpdate=featureService.updateFeature(feature);
        if(feature==featureUpdate){
            return ResponseEntity.ok().body(featureUpdate);
        }else {
            return ResponseEntity.badRequest().body(null); //A changer, il faut créer divers réponses pas le temps
        }


    }

    /**
     * DELETE /features/:id : delete the features with id.
     *
     * @param feature to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/features")
    //@Secured(AuthoritiesConstants.ADMIN) /*Qui on veut*/
    public ResponseEntity<Void> deleteFeature(@PathVariable Feature feature) throws URISyntaxException {
        Feature featureUpdate;
        featureService.deleteFeature(feature);
        return ResponseEntity.ok().build();
    }


}
