export type DateParts = {
  date: string;
  time: string;
  zone: string;
};

export function defaultDateParts(zone: string = ''): DateParts {
  return {
    date: '',
    time: '00:00:00',
    zone: zone ? zone : DateTime.now().isoOffset,
  };
}

/**
 * @description Add seconds part if a time only have hour and minute.
 * For example, 10:10 will be 10:10:00
 */
export function padSeconds(time: string): string {
  const parts = time.split(':');

  if (parts.length >= 3) {
    return time;
  }

  for (let i = 0; i < 3; i++) {
    if (!parts[i]) {
      parts[i] = '00';
    }
  }

  return parts.join(':');
}

function padZero(num: number): string {
  return num.toFixed().padStart(2, '0');
}

export function joinDateParts(parts: DateParts): string {
  if (!parts.date  || !parts.time || !parts.zone) {
    return '';
  }

  return `${parts.date}T${padSeconds(parts.time)}${parts.zone}`;
}

export class DateTime {
  private date: Date;

  constructor (date: Date) {
    this.date = date;
  }

  toParts(): DateParts {
    return {
      date: this.isoLocalDate,
      time: this.localTime, // Call joinDateParts on this field to convert to iso format.
      zone: this.isoOffset,
    };
  }

  get localTime(): string {
    return [
      padZero(this.date.getHours()),
      padZero(this.date.getMinutes()),
    ].join(':');
  }

  get isoOffset(): string {
    const offset = this.date.getTimezoneOffset();
    if (offset === 0) {
      return 'Z';
    }
  
    const sign = offset <= 0
      ? '+'
      : '-';
  
    const hour = Math.floor(Math.abs(offset) / 60).toFixed();
    const minute = Math.abs(offset % 60).toFixed();
  
    return `${sign}${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
  }

  get isoLocalDate(): string {
    return [
      this.date.getFullYear(),
      padZero(this.date.getMonth() + 1),
      padZero(this.date.getDate()),
    ].join('-');
  }

  get isoLocalTime(): string {
    return [
      padZero(this.date.getHours()),
      padZero(this.date.getMinutes()),
      padZero(this.date.getSeconds())
    ].join(':');
  }

  get isoLocalDateTime(): string {
    return this.isoLocalDate + 'T' + this.isoLocalTime + this.isoOffset;
  }

  get isoUTCTime(): string {
    return [
      padZero(this.date.getUTCHours()),
      padZero(this.date.getUTCMinutes()),
      padZero(this.date.getUTCSeconds())
    ].join(':');
  }

  get isoUTCDate(): string {
    return [
      `${this.date.getUTCFullYear()}`,
      padZero(this.date.getUTCMonth() + 1),
      padZero(this.date.getUTCDate())
    ].join('-');
  }

  get isoUTCDateTime(): string {
    return this.isoUTCTime + 'T' + this.isoUTCDate + 'Z';
  }

  static now(): DateTime {
    return new DateTime(new Date());
  }
}


