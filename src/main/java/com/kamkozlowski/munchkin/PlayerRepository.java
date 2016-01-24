package com.kamkozlowski.munchkin;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "players", path = "player")
public interface PlayerRepository extends CrudRepository<Player, Long> {

    List<Player> findByName(@Param("name") String name);

}
