import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from '@pabloctickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
