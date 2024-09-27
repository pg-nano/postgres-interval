/**
 * A parsed Postgres interval string.
 */
declare class PostgresInterval {
  years: number
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number

  /**
   * Returns an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations)
   * compliant string, for example P0Y0M0DT0H9M0S.
   *
   * ```js
   * import { parse } from 'postgres-interval'
   * const interval = parse('01:02:03')
   * // => { hours: 1, minutes: 2, seconds: 3 }
   * interval.toISOString()
   * // P0Y0M0DT1H2M3S
   * ```
   */
  toISOString(): string

  /**
   * Returns an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations)
   * compliant string shortened to minimum length, for example `PT9M`.
   *
   * ```js
   * import { parse } from 'postgres-interval'
   * const interval = parse('01:02:03')
   * // => { hours: 1, minutes: 2, seconds: 3 }
   * interval.toISOStringShort()
   * // PT1H2M3S
   * ```
   */
  toISOStringShort(): string
}

export function parse(raw: string | IntervalParts): PostgresInterval

export interface IntervalParts {
  years?: number
  months?: number
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
  milliseconds?: number
}

export default PostgresInterval
