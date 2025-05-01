import {
  CreditsDBResponse,
  MovieDBCast,
} from "../interfaces/movie-db/credits.response";
import { CastEntity } from "../interfaces/movie/cast.interface";

export class CastMapper {
  static fromMovieDBCastToEntity(actor: MovieDBCast): CastEntity {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character ?? "No character",
      avatar: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : "https://i.stack.imgur.com/l60Hf.png",
    };
  }
}
